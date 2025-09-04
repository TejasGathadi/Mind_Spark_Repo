import axios from "axios";
import { api } from "./API";

export const getAllStudent = async (schoolId) => {
  try {
    const response = await api.get(`/student/${schoolId}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getAllStudentSchool = async (schoolId) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/school/parents/${schoolId}`
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const addNewStudent = async (schoolId, studentData) => {
  try {
    const response = await api.post(`/student/add/${schoolId}`, studentData);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const updateStudent = async (studentId, updatedStudent) => {
  try {
    const response = await api.put(
      `/student/update/${studentId}`,
      updatedStudent
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const deleteStudent = async (schoolId, studentId) => {
  try {
    await api.delete(`/student/delete/${schoolId}/${studentId}`);
  } catch (err) {
    throw err;
  }
};

export const updateMarksOfStudent = async (
  schoolId,
  studentId,
  testIndex,
  mark
) => {
  try {
    const response = await api.put(
      `/student/${schoolId}/${studentId}/marks`,
      {},
      {
        params: {
          testIndex,
          mark,
        },
      }
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};
