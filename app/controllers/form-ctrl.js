import { Form } from "../models/form-model.js";

const formCtrl = {};

formCtrl.createForm = async (req, res) => {
  try {
    const newForm = await Form.create(req.body);
    await newForm.save();
    res.json(newForm);
  } catch (err) {
    res.status(500).json({ error: "something went wrong" });
  }
};

formCtrl.getAllForm = async (req, res) => {
  const keyword = req.query.keyword || "";
  try {
    const forms = await Form.find({
      title: {
        $regex: keyword,
        $options: "i",
      },
    }).sort("-createdAt");
    res.json(forms);
  } catch (err) {
    res.status(500).json({ error: "something went wrong" });
  }
};

formCtrl.viewForm = async (req, res) => {
  const id = req.params.id;
  try {
    const form = await Form.findById(id);
    res.json(form);
  } catch (err) {
    res.status(500).json({ error: "something went wrong" });
  }
};

formCtrl.editForm = async (req, res) => {
  const id = req.params.id;
  try {
    const updateForm = await Form.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateForm);
  } catch (err) {
    res.status(500).json({ error: "something went wrong" });
  }
};

formCtrl.deleteForm = async (req, res) => {
  const id = req.params.id;
  try {
    const updateForm = await Form.findByIdAndDelete(id);
    res.json(updateForm);
  } catch (err) {
    res.status(500).json({ error: "something went wrong" });
  }
};

export default formCtrl;
