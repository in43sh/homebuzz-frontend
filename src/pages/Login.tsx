import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    EyeIcon,
    EyeSlashIcon,
    // GlobeAltIcon,
    // CodeBracketIcon,
} from "@heroicons/react/24/solid";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/";

    const [form, setForm] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });
    const [errors, setErrors] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = { email: "", password: "" };

        if (!form.email) {
            newErrors.email = "Email is required.";
            valid = false;
        }
        if (!form.password) {
            newErrors.password = "Password is required.";
            valid = false;
        }
        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate(from, { replace: true });
        }, 1500);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
                <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
                    Sign In
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
                                errors.email
                                    ? "border-red-500"
                                    : "focus:ring-blue-300"
                            }`}
                            required
                        />
                        {errors.email && (
                            <p className="text-sm text-red-500 mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
                                errors.password
                                    ? "border-red-500"
                                    : "focus:ring-blue-300"
                            }`}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-9 text-gray-500"
                        >
                            {showPassword ? (
                                <EyeSlashIcon className="w-5 h-5" />
                            ) : (
                                <EyeIcon className="w-5 h-5" />
                            )}
                        </button>
                        {errors.password && (
                            <p className="text-sm text-red-500 mt-1">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                        <label className="flex items-center space-x-2 text-sm">
                            <input
                                type="checkbox"
                                name="rememberMe"
                                checked={form.rememberMe}
                                onChange={handleChange}
                                className="h-4 w-4"
                            />
                            <span>Remember Me</span>
                        </label>
                        <Link
                            to="/forgot-password"
                            className="text-sm text-yellow-400 hover:underline"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-yellow-400 text-white py-2 rounded-lg font-semibold transition hover:bg-blue-700 disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? "Signing In..." : "Sign In"}
                    </button>
                </form>

                {/* Social Logins */}
                {/* <div className="mt-6 space-y-3">
                    <button className="w-full flex items-center justify-center border py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition">
                        // <GlobeAltIcon className="w-5 h-5 mr-2" />
                        Sign in with Google
                    </button>
                    <button className="w-full flex items-center justify-center border py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition">
                        <CodeBracketIcon className="w-5 h-5 mr-2" />
                        Sign in with GitHub
                    </button>
                </div> */}

                {/* Signup Link */}
                <p className="mt-4 text-center text-gray-600">
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                        className="text-yellow-400 font-semibold hover:underline"
                    >
                        Sign up here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
