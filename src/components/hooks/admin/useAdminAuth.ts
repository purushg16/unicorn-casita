import { useMutation } from "@tanstack/react-query";
import APIClient from "../../services/api-client";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { AdminLogin, ChangePassword } from "../../entities/credentials";
import Toaster from "../../functions/toaster";
import { _adminChangePassword, _adminLogin } from "../../services/endpoints";
import { SuccessResponse, ErrorResponse } from "../../entities/response";

const adminLogin = new APIClient<AdminLogin>(_adminLogin);
const adminChangePassword = new APIClient<ChangePassword>(_adminChangePassword);

const useAdminLogin = () => {
  const toast = useToast();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: adminLogin.authorizationPost,
    onSuccess: () => navigate("/admin"),
    onError: (error: ErrorResponse) =>
      toast(Toaster("error", error.response?.data.error)),
  });
};

const useAdminChangePassword = (callback: () => void) => {
  const toast = useToast();

  return useMutation({
    mutationFn: adminChangePassword.changePassword,
    onSuccess: (data: SuccessResponse) => {
      console.log(data);
      toast(Toaster("success", data.data.message));
      callback();
    },
    onError: (error: ErrorResponse) =>
      toast(Toaster("error", error.response?.data.error)),
  });
};

export { useAdminLogin, useAdminChangePassword };
