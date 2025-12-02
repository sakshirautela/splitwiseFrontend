import { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";



export default function Login() {
    // const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    
    async function handleSubmit(e) {
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:5000/api/auth/login", formData);
            console.log("Login Successful:", response.data);
            // navigate("/login"); // redirect
        }catch(error){
            console.error("There was an error!", error);
        }
        console.log("Form Submitted:", formData);
        
    }

    return (
        <div>
          <h2>Login Page</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              required
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            /><br />

            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            /><br />

            <button type="submit">Submit</button>
          </form>
        </div>
    );
}
