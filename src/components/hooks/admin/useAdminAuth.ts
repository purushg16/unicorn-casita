import { useMutation } from "@tanstack/react-query";
import APIClient from "../../services/api-client";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { AdminLogin, ChangePassword } from "../../entities/credentials";
import Toaster from "../../functions/toaster";
import { _adminChangePassword, _adminLogin } from "../../services/endpoints";

const adminLogin = new APIClient<AdminLogin>(_adminLogin);
const adminChangePassword = new APIClient<ChangePassword>(_adminChangePassword);

const useAdminLogin = () => {
  const toast = useToast();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: adminLogin.authorizationPost,
    onSuccess: () => navigate("/admin"),
    onError: (error) => toast(Toaster("error", error.message)),
  });
};

const useAdminChangePassword = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: adminChangePassword.authorizationPost,
    onSuccess: () => toast(Toaster("error", "Password Changed successfully")),
    onError: () =>
      toast(Toaster("error", "Something went wrong, Try again later!")),
  });
};

export { useAdminLogin, useAdminChangePassword };
