
import api from "./api";

// GET: Mengambil semua kursus
export const getCourses = async () => {
  const response = await api.get("/courses");
  return response.data;
};

// POST: Menambahkan kursus baru
export const addCourse = async (courseData) => {
  const response = await api.post("/courses", courseData);
  return response.data;
};

// PUT: Memperbarui data kursus
export const updateCourse = async (id, courseData) => {
  const response = await api.put(`/courses/${id}`, courseData);
  return response.data;
};

// DELETE: Menghapus kursus
export const deleteCourse = async (id) => {
  const response = await api.delete(`/courses/${id}`);
  return response.data;
};
