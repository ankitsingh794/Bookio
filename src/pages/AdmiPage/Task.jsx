import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { Add, Edit, Delete, Image } from '@mui/icons-material';
import './Style/Task.css'; // Custom styling

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState({ name: '', description: '', image: '' });
  const [editIndex, setEditIndex] = useState(null);

  const handleOpen = (task = { name: '', description: '', image: '' }, index = null) => {
    setCurrentTask(task);
    setEditIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentTask({ name: '', description: '', image: '' });
    setEditIndex(null);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);
      setCurrentTask({ ...currentTask, image: imageUrl });
    } else {
      setCurrentTask({ ...currentTask, [name]: value });
    }
  };

  const handleSave = () => {
    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = currentTask;
      setTasks(updatedTasks);
    } else {
      setTasks([...tasks, currentTask]);
    }
    handleClose();
  };

  const handleDeleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter(t => t.id !== id));
    }
  };

  return (
    <div className="task-container">
      <div className="task-header">
        <h2>Tasks</h2>
        <Button variant="contained" startIcon={<Add />} onClick={() => handleOpen()}>Add Task</Button>
      </div>

      <TableContainer component={Paper} className="task-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task, index) => (
              <TableRow key={index}>
                <TableCell>
                  {task.image ? <img src={task.image} alt="Task" className="task-img-preview" /> : <Image />}
                </TableCell>
                <TableCell>{task.name}</TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleOpen(task, index)}><Edit /></IconButton>
                  <IconButton color="error" onClick={() => handleDeleteTask(index)}><Delete /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editIndex !== null ? 'Edit Task' : 'Add Task'}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Task Name"
            name="name"
            fullWidth
            value={currentTask.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Description"
            name="description"
            fullWidth
            value={currentTask.description}
            onChange={handleChange}
          />
          <Button variant="outlined" component="label" sx={{ mt: 2 }}>
            Upload Image
            <input hidden accept="image/*" type="file" name="image" onChange={handleChange} />
          </Button>
          {currentTask.image && <img src={currentTask.image} alt="Preview" className="task-img-preview-large" />}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Task;
