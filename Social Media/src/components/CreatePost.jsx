const CreatePost = () => {
  return (
    <form className="create-post">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="tilte"
          placeholder="How are you feeling today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
