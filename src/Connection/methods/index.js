import apiInstance from './axios';
import {errorHandler} from './errorHandler';


const postConfig = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
};

const formDataConfig = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
};


export const get = async endPoint => {
  try {
    const result = await apiInstance.get(endPoint);
    return result;
  } catch (e) {
    throw errorHandler(e);
  }
};

export const post = async (endPoint, data) => {
  try {
    const result = await apiInstance.post(endPoint, data, postConfig);
    return result;
  } catch (e) {
    throw errorHandler(e);
  }
};

export const postFormData = async (endPoint, data) => {
  try {
    const result = await apiInstance.post(endPoint, data, formDataConfig);
    return result;
  } catch (e) {
    throw errorHandler(e);
  }
};

export const documentPost = async (endPoint, data) => {
  try {
    const result = await apiInstance.post(endPoint, data, documentConfig);
    return result;
  } catch (e) {
    throw errorHandler(e);
  }
};

export const patch = async (endPoint, data) => {
  try {
    const result = await apiInstance.patch(endPoint, data, postConfig);
    return result;
  } catch (e) {
    throw errorHandler(e);
  }
};

export const patchPicture = async (endPoint, data) => {
  try {
    const result = await apiInstance.patch(endPoint, data, documentConfig);
    return result;
  } catch (e) {
    throw errorHandler(e);
  }
};

export const deleted = async endPoint => {
  try {
    const result = await apiInstance.delete(endPoint);
    return result;
  } catch (e) {
    throw errorHandler(e);
  }
};
