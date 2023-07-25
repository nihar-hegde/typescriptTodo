import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

const schema = z.object({
  title: z
    .string()
    .min(3, { message: "Title should be at least 3 charecters long!!" })
    .max(25, { message: "Title can't be more than 25 charectors long!!" }),
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 charecters long!!" })
    .max(50, {
      message: "Description can't be more than 50 charectors long!!",
    }),
});

type TodoFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: TodoFormData) => void;
}

const TodoForm = ({ onSubmit }: Props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoFormData>({ resolver: zodResolver(schema) });
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Todo</DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit((data) => {
              onSubmit(data);
              reset();
            })}
          >
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                {...register("title")}
                id="title"
                type="text"
                className="form-control"
              />
              {errors.title && (
                <p className="text-danger">{errors.title.message}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                {...register("description")}
                id="description"
                type="text"
                className="form-control"
              />

              {errors.description && (
                <p className="text-danger">{errors.description.message}</p>
              )}
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TodoForm;
