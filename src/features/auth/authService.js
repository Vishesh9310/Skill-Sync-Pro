// Mock backend logic for JWT login
export const loginService = async ({ email, password }) => {
  if (email === "admin@site.com" && password === "admin123") {
    return { name: "Admin", email, role: "admin", token: "jwt_admin_token" };
  } else if (email === "student@site.com" && password === "student123") {
    return { name: "Student", email, role: "student", token: "jwt_student_token" };
  } else {
    throw new Error("Invalid email or password");
  }
};
