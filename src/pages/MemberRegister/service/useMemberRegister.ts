import { useMutation } from 'react-query';
import { MemberData, PostData } from '../../../shared/interfaces/interfaces';
import axios, { AxiosError } from 'axios';
import { BASE_URL } from '../../../config/connectionAPI';

export const useMemberRegister = () => {
  return useMutation(
    async (data: MemberData) => {
      await createMember({ data, endPoint: 'createMember' });
    },
    {
      onSuccess: () => {
        alert('Membro cadastrado com sucesso!');
      },
      onError: err => {
        const error = err as AxiosError;
        alert(`Erro na requisição: ${error.message}`);
      }
    }
  );
};

const createMember = async ({ data, endPoint }: PostData<MemberData>) => {
  await axios.post(`${BASE_URL}/${endPoint}`, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
