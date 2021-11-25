import {useState} from 'react';

function ProjectForm(props) {
    const {addProject, onHandleAddProject} = props;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if(title.trim() && description.trim()) {
        addProject({title: title, description: description});
        setTitle('');
        setDescription('');
        onHandleAddProject();
    }
  }

  const handleChange = (e) => {
    if (e.target.name === 'title') {
        setTitle(e.target.value);
    } else if (e.target.name === 'description') {
        setDescription(e.target.value);
    }

}

  return (
      <div className="form-add">
          <label htmlFor="txtTitle">Title:</label>
          <input type="text" name="title" onChange={handleChange} id="txtTitle" />
          <label htmlFor="txtDesc">Description:</label>
          <input type="text" name="description" onChange={handleChange} id="txtDesc"/>
          <button className="btn-aside" onClick={handleSubmit}>Create</button>
      </div>
  );
}

export default ProjectForm;