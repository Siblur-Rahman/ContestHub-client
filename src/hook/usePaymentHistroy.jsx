import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePaymentHistroy = () => {
    const axiosPublic = useAxiosPublic();
    const {data: paymentHistroy = [], isPending: loading, refetch} = useQuery({
        queryKey: ['paymentHistroy'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/paymenthistroy');
            return res.data;
        }
    })


    return [paymentHistroy, loading, refetch]
};

export default usePaymentHistroy;