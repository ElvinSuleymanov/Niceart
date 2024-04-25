import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Routes } from 'router/routes';
export const useForm = () => {
  const navigate = useNavigate();
  return useMutation({
      mutationFn: (credentials: any) => {
        return (credentials);
      },
      onSuccess: () => {
        navigate(Routes.partners);
      },
   }
  );
};
