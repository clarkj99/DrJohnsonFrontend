import React from "react";
import { fetchFunction, baseURL } from "../utils";
import Icon from "./Icon";

class ProfileForm extends React.Component {
  initalState = {
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    photo: null
  };

  componentDidMount = () => {
    this.initalState = { ...this.props.user.profile };
    this.setState({ ...this.props.user.profile });
  };

  state = { ...this.initalState };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleImageChange = e => {
    if (e.target.files[0]) this.setState({ newPhoto: e.target.files[0] });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ loading: true });
    fetchFunction("profile", "PATCH", {
      profile: this.state
    })
      .then(data => {
        this.props.updateProfile(data);
        this.setState({ loading: false });
      })
      .catch(res => {});
    if (this.state.newPhoto) this.uploadPhoto();
  };

  uploadPhoto = () => {
    const formData = new FormData();
    formData.append("file", this.state.newPhoto);

    fetch(`${baseURL}/photo/${this.props.user.profile.id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        if (!data.error) this.props.updateProfile(data);
      });
  };

  render() {
    const profile = this.state;
    const loading = this.state.loading ? "is-loading" : "";

    return (
      <div className="container">
        <h2 className="title">Edit Profile</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="field">
            <div className="control">
              <input
                name="address1"
                className="input"
                type="text"
                placeholder="Street address"
                value={profile.address1 || ""}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input
                name="address2"
                className="input"
                type="text"
                placeholder="Address 2"
                value={profile.address2 || ""}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input
                name="city"
                className="input"
                type="text"
                placeholder="City"
                value={profile.city || ""}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input
                name="state"
                className="input"
                type="text"
                placeholder="State"
                value={profile.state || ""}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input
                name="zip"
                className="input"
                type="text"
                placeholder="Zip"
                value={profile.zip || ""}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <div className="file has-name is-fullwidth ">
                <label className="file-label">
                  <input
                    className="file-input "
                    type="file"
                    name="newPhoto"
                    accept="image/png, image/jpeg"
                    onChange={this.handleImageChange}
                  />
                  <span className="file-cta">
                    <span className="file-icon">
                      <i className="fas fa-upload"></i>
                    </span>
                    <span className="file-label">Add a photo</span>
                  </span>
                  {profile.newPhoto && (
                    <span className="file-name">{profile.newPhoto.name}</span>
                  )}
                </label>
              </div>
            </div>
          </div>
          <div className="field">
            <button className={"button  " + loading}>
              <Icon icon="check" />
              <span>Submit</span>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ProfileForm;
