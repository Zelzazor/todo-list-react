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

  return (
      <div className="form-add">
          <label htmlFor="txtTitle">Title:</label>
          <input type="text" name="title" value={title} onChange={(e)=> setTitle(e.target.value)} id="txtTitle" />
          <label htmlFor="txtDesc">Description:</label>
          <input type="text" name="description" value={description} onChange={(e)=>setDescription(e.target.value)} id="txtDesc"/>
          <button className="btn-aside" onClick={handleSubmit}>Create</button>
      </div>
  );
}

export default ProjectForm;