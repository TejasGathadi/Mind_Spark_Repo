import axios from "axios";
import { api } from "./API";

export const addSchool = async (schoolData) => {
  try {
    const response = await api.post("/school/add-school", schoolData);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getAllSchoolParent = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/school/parents/all-schools-parents"
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getAllSchools = async () => {
  try {
    const response = await api.get("/school/all-schools");
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getSchoolById = async (schoolId) => {
  try {
    const response = await api.get(`/school/${schoolId}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const deleteSchoolById = async (schoolId) => {
  try {
    await api.delete(`/school/${schoolId}`);
  } catch (err) {
    throw err;
  }
};

export const updateSchool = async (schoolId, schoolData) => {
  try {
    const response = await api.put(`/school/${schoolId}`, schoolData);
    return response.data;
  } catch (err) {
    throw err;
  }
};
