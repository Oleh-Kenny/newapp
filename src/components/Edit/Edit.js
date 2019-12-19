import React from "react";

class Edit extends React.Component {
  state = {
    id: this.props.singleContactArr.id,
    name: this.props.singleContactArr.name,
    description: this.props.singleContactArr.description,
    avatar: this.props.singleContactArr.avatar,
    gender: this.props.singleContactArr.gender
  };

  GetName = e => {
    //console.log(e.target.value);
    this.setState({
      name: e.target.value
    });
  };

  Discr = e => {
    this.setState({
      description: e.target.value
    });
  };
  

  GetAvatar = e => {
    this.setState({
      avatar: e.target.value
    });
  };
  GetGender = e => {
    this.setState({
      gender: e.target.value
    });
  };
  
  
  render() {
   const {id,name,description,avatar,gender}=this.state;

    return (
      <form onSubmit={this.onEditor}>
        <div className="row d-flex jstify-content-center">
          <div className="col-lg-7">
            <label for="exampleInputFirstName"> Name</label>
            <input
              type="text"
              className="form-control"
              placeholder={name}
              name="name"
              onChange={this.GetName}
            />
          </div>

          <div className="form-group col-lg-7 top">
            <label for="exampleInputDiscription">Discription</label>
            <input
              type="discription"
              className="form-control"
              placeholder={description}
              description="description"
              onChange={this.Discr}
            />
          </div>
        </div>
        <div className="row form-group col-7 p-0">
          <label className="col-5 " for="exampleFormControlFile1">
            Add You Avatar Photon
          </label>
          <input
            type="namber"
            className="number col-1"
            avatar={avatar}
            onChange={this.GetAvatar}
          />
        </div>

        <div className=" row col-lg-7">
          <label for="exampleInputFirstName"> Gender</label>
          <input
            type="text"
            className="form-control"
            placeholder={gender}
            gender="gender"
            onChange={this.GetGender}
          />
        </div>

        <button type="submit" className="btn btn-primary cl">
          Submit
        </button>
      </form>
    );
  }
}

export default Edit;
