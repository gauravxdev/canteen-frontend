import React from 'react';
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface AddStudentDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onAddStudent: (name: string) => void;
}

const AddStudentDialog = ({ isOpen, onOpenChange, onAddStudent }: AddStudentDialogProps) => {
  const [name, setName] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAddStudent(name.trim());
      setName('');
      onOpenChange(false);
    }
  };

  return React.createElement(
    Dialog,
    { 
      open: isOpen, 
      onOpenChange: (open: boolean) => {
        if (!open) {
          setName('');
        }
        onOpenChange(open);
      }
    },
    React.createElement(
      DialogContent,
      { className: "sm:max-w-[425px]" },
      React.createElement(
        DialogHeader,
        null,
        React.createElement(DialogTitle, null, "Add New Student"),
        React.createElement(
          DialogDescription,
          null,
          "Enter the student's name and click Add when you're done."
        )
      ),
      React.createElement(
        "form",
        { onSubmit: handleSubmit },
        React.createElement(
          "div",
          { className: "grid gap-4 py-4" },
          React.createElement(
            "div",
            { className: "grid grid-cols-4 items-center gap-4" },
            React.createElement(
              Label,
              { htmlFor: "name", className: "text-right" },
              "Name"
            ),
            React.createElement(
              "div",
              { className: "col-span-3 space-y-1" },
              React.createElement(Input, {
                id: "name",
                value: name,
                onChange: (e) => setName(e.target.value),
                placeholder: "Student name"
              })
            )
          )
        ),
        React.createElement(
          DialogFooter,
          null,
          React.createElement(
            Button,
            { type: "button", variant: "outline", onClick: () => onOpenChange(false) },
            "Cancel"
          ),
          React.createElement(
            Button,
            { 
              type: "submit", 
              className: "bg-black text-white hover:bg-gray-800",
              disabled: !name.trim()
            },
            "Add Student"
          )
        )
      )
    )
  );
};

export default AddStudentDialog;
