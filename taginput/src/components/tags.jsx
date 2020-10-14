import React from "react";
import { connect } from "react-redux";
import { deleteTag, addTag } from "../actions/index";

const Tags = (props) => {
  const { tags } = props;

  const handleKeyUp = (e) => {
    const val = e.target.value;
    if (e.key === "Enter" && val) {
      console.log(val);
      props.addTag(val);
    }
  };

  return (
    <div>
      <ul>
        {tags.map((tag) => (
          <li key={tag.id}>
            {tag.text}
            <button onClick={() => props.deleteTag(tag.id)}>delete</button>
          </li>
        ))}
        <li>
          <input
            type="text"
            onKeyUp={(e) => handleKeyUp(e)}
            placeholder="enter new tag"
          />
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tags: state.tags,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTag: (id) => dispatch(deleteTag(id)),
    addTag: (text) => dispatch(addTag(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tags);
