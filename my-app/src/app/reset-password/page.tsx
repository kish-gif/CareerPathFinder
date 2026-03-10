"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ChangePasswordPrompt() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Placeholder action — no backend logic
    toast.success("Password changed successfully!");
    router.push("/login"); // Redirect to login page
    setIsLoading(false);
  };

  return (
    <div className="py-12">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-background border rounded-xl shadow-sm p-6 md:p-8"
        >
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">Forgot Password</h1>
            <p className="text-muted-foreground mt-1">
              Enter your email and new password
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1 text-gray-900 dark:text-gray-100"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white dark:bg-gray-800 dark:text-gray-100"
                placeholder="Email"
                required
              />
            </div>

            {/* Current Password */}
            <div>
              <label
                htmlFor="currentPassword"
                className="block text-sm font-medium mb-1 text-gray-900 dark:text-gray-100"
              >
                Current Password
              </label>
              <input
                id="currentPassword"
                name="currentPassword"
                type="password"
                value={formData.currentPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white dark:bg-gray-800 dark:text-gray-100"
                placeholder="••••••••"
                required
              />
            </div>

            {/* New Password */}
            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium mb-1 text-gray-900 dark:text-gray-100"
              >
                New Password
              </label>
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                value={formData.newPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white dark:bg-gray-800 dark:text-gray-100"
                placeholder="••••••••"
                required
              />
            </div>

            {/* Confirm New Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium mb-1 text-gray-900 dark:text-gray-100"
              >
                Confirm New Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white dark:bg-gray-800 dark:text-gray-100"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 px-4 text-lg font-medium rounded-md transition-colors
                bg-gray-900 text-white hover:bg-gray-700
                dark:bg-gray-100 dark:text-black dark:hover:bg-gray-300
                ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {isLoading ? "Updating..." : "Change Password"}
            </button>
          </form>

          {/* Back to Login link */}
          <div className="mt-6 text-center text-sm">
            <p className="text-muted-foreground dark:text-gray-400">
              Back to{" "}
              <span
                onClick={() => router.push("/login")}
                className="text-primary hover:underline cursor-pointer"
              >
                Login
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}