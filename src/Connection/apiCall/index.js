import {Apis} from '../endpoints';
import {
  get,
  post,
  patch,
  deleted,
  documentPost,
  patchPicture,
  postFormData,
} from '../methods';


export const apiCall = {
  signin: async obj => {
    let result = await post(Apis.signin, obj);
    console.log("🚀 ~ file: index.js:16 ~ obj", obj)
    if (result.status === 200) return result.data;
    else throw result;                                                 
  },
  register: async obj => {
    let result = await post(Apis.register, obj);
    if (result.status === 200) return result.data;
    else throw result;
  },
  category: async obj => {
    let result = await get(Apis.category, obj);
    if (result.status === 200) return result.data;
    else throw result;
  },
  createaddExpense: async obj => {
    let result = await postFormData(Apis.createaddExpense, obj);
    if (result.status === 200) return result.data;
    else throw result;
  },
  expenseId: async (id) => {
    let result = await get(Apis.expenseId + `/?id=${id}`);
    if (result.status === 200) return result.data;
    else throw result;
  },
  allExpense: async obj => {
    let result = await get(Apis.allExpense, obj);
    if (result.status === 200) return result.data;
    else throw result;
  },
  totalExpense: async obj => {
    let result = await get(Apis.totalExpense, obj);
    if (result.status === 200) return result.data;
    else throw result;
  },
  updateExpense: async obj => {
    let result = await patch(Apis.updateExpense + `/?id=${id}`);
    if (result.status === 200) return result.data;
    else throw result;
  },
  expenseGroup: async obj => {
    let result = await get(Apis.expenseGroup, obj);
    if (result.status === 200) return result.data;
    else throw result;
  },
  monthExpense: async obj => {
    let result = await get(Apis.monthExpense, obj);
    if (result.status === 200) return result.data;
    else throw result;
  },
  passwordchange: async obj => {
    let result = await post(Apis.passwordchange, obj);
    if (result.status === 200) return result.data;
    else throw result;
  },
  restpassword: async obj => {
    let result = await post(Apis.restpassword, obj);
    if (result.status === 200) return result.data;
    else throw result;
  },
  deleteId: async obj => {
    let result = await patch(Apis.deleteId + `?id=${obj}`);
    if (result.status === 200) return result.data;
    else throw result;
  },
 imageupload: async obj => {
  let result = await post(Apis.imageupload, obj);
  if (result.status === 200) return result.data;
  else throw result;
 },
}