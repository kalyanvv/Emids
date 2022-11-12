import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsById } from "../../actions/productactions";
import { Rating } from "react-simple-star-rating";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import productsStyles from "./products.module.css";
import { fetchreview } from "../../actions/reviewaction";
import { addReview } from "../../api";

export default function ProductInfo() {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const initialState = {
    rating: "",
    description: "",
  };
  const data = useSelector((state) => state.productreducer?.data);
  const reviewdata = useSelector((state) => state.reviewreducer.data);
  const authdata = useSelector((state) => state.authReducer);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState(initialState);
  const [refetch, setRefetch] = useState(true);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(getProductsById(id));
  }, []);

  useEffect(() => {
    dispatch(fetchreview(id));
  }, [refetch]);

  const handleSubmit = async () => {
    await addReview({
      ...form,
      productid: id,
      name: authdata.fname + " " + authdata.lname,
    });
    setRefetch(!refetch);
    setShowModal(false);
  };
  console.log(data);
  return (
    <>
      <Navbar styles={productsStyles} />
      <div
        className="modal fade show"
        id="modalLoginForm"
        tabindex="-1"
        ariaLabelledby="myModalLabel"
        style={{
          display: showModal ? "block" : "none",
          paddingRight: "17px",
          background: "rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">Edit</h4>
              <button
                type="button"
                className="close"
                dataDismiss="modal"
                ariaLabel="Close"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                <span ariaHidden="true">X</span>
              </button>
            </div>
            <div className="modal-body mx-3">
              <div className="md-form mb-5">
                <input
                  type="number"
                  name="rating"
                  value={form.rating}
                  max={5}
                  min={0}
                  onChange={handleChange}
                  required
                  className="form-control validate"
                />
                <label>Rating</label>
              </div>
              <div className="md-form mb-5">
                <input
                  type="text"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  required
                  className="form-control validate"
                />
                <label>Description</label>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                className="btn btn-default waves-effect waves-light"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className={`${productsStyles.container_sproducts} my-5 pt-5`}>
        {data && (
          <div className="row mt-5">
            <div className="col-lg-5 col-md-6 col-6">
              <img
                className=""
                src={`/${data.img}`}
                id={productsStyles.MainImg}
                style={{ height: "100%", width: "200px" }}
                alt=""
              />
            </div>

            <div className="col-lg-6 col-md-6 col-6">
              <h3>{data.name}</h3>

              <div className={productsStyles.price}>
                M.R.P. : <span>{data.price}</span>
              </div>
            </div>
          </div>
        )}
      </section>
      <section className={productsStyles["product-description"]}>
        <div>
          <h2>Product Description</h2>
        </div>

        {data && (
          <div className={productsStyles.product_dic}>
            <h2>{data.name}</h2>
            <p>{data.desc}</p>
          </div>
        )}
      </section>
      <section>
        <div>
          <h2>
            Product Reviews{" "}
            <i
              className="fa-solid fa-circle-plus"
              onClick={() => {
                setShowModal(true);
              }}
            ></i>
          </h2>
        </div>
        {reviewdata &&
          reviewdata.map((review) => {
            return (
              <div className={productsStyles["product-review"]}>
                <h4>
                  <img
                    src="/images/usericon.jpg"
                    className={productsStyles["usericon"]}
                  />
                  {review.name}
                </h4>
                <Rating
                  initialValue={review.rating}
                  size={20}
                  allowHover={false}
                  disableFillHover={true}
                  readonly={review.rating}
                />
                <p style={{ textTransform: "none", fontSize: "11px" }}>
                  {review.description}
                </p>
              </div>
            );
          })}
      </section>
      <Footer styles={productsStyles} />
    </>
  );
}
