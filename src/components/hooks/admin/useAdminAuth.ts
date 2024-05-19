import { useMutation } from "@tanstack/react-query";
import APIClient from "../../services/api-client";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { AdminLogin, ChangePassword } from "../../entities/credentials";
import Toaster from "../../functions/toaster";
import { _adminChangePassword, _adminLogin } from "../../services/endpoints";
import { ErrorResponse } from "react-router-dom";
import { SuccessResponse } from "../../entities/response";

const adminLogin = new APIClient<AdminLogin>(_adminLogin);
const adminChangePassword = new APIClient<ChangePassword>(_adminChangePassword);

const useAdminLogin = () => {
  const toast = useToast();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: adminLogin.authorizationPost,
    onSuccess: () => navigate("/admin"),
    onError: (error: ErrorResponse) =>
      toast(Toaster("error", error.data.error)),
  });
};

const useAdminChangePassword = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: adminChangePassword.authorizationPost,
    onSuccess: (data: SuccessResponse) =>
      toast(Toaster("success", data.data.msg)),
    onError: (error: ErrorResponse) =>
      toast(Toaster("error", error.data.error)),
  });
};

export { useAdminLogin, useAdminChangePassword };