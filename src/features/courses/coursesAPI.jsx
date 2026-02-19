export const fetchCoursesAPI = async () => {
  const data = localStorage.getItem("courses");
  return data ? JSON.parse(data) : [];
};
export const saveCoursesApi = async (courses) => {
  localStorage.setItem("courses", JSON.stringify(courses));
  return courses;
};
