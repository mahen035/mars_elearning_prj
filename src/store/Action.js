
import http from "./http-common";

//let loggedIn = [];
export const addUserAction = (postData) => async (dispatch, getState) => {
  dispatch({ type: "ADDUSER_REQUEST" });
 
  try {
    
    const response = await http.post("/addUser", postData);
    
    dispatch({ type: "ADDUSER_SUCCESS", payload: response.data });
    console.log("Data::", response.data);
   
   } catch (error) {
    dispatch({ type: "ADDUSER_FAILURE", error });
  }
};

export const loginAction = (postData) => async (dispatch, getState) => {
  dispatch({ type: "LOGIN_REQUEST" });
  
  try {
   
    const response = await http.post("/loginUser", postData);
    //console.log("Response=", response.data);
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
     //loggedIn = response.data;
    // if (response.status === "OK") {
    //   navigate("/userprofile");
    // }
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", error });
  }
};

export const getCoursesAction = () => async (dispatch, getState) => {
   dispatch({ type: "GETCOURSE_REQUEST" });
  try {
    const response = await http.get("/getCourses");
    dispatch({ type: "GETCOURSE_SUCCESS", payload: response.data });
    
  } catch (error) {
    dispatch({ type: "GETCOURSE_FAILURE", error });
  }
};

