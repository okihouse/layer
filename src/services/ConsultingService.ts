import AxiosContext from "../contexts/AxiosContext";

export const ConsultingService = {
    create: async (id: string, payload: any) => {
        try {
            const { data, status } = await AxiosContext.post(`/user-consultings/${id}`, payload);
            return { data: data, status: status }
        } catch (error) {
            return { data: null, error: error }
        }
    },
    consulting: async (id: string) => {
        try {
            const { data, status } = await AxiosContext.get(`/user-consultings/${id}`);
            return { data: data, status: status }
        } catch (error) {
            return { data: null, error: error }
        }
    },
    privacyTerm: async (id: string) => {
        try {
            const { data, status } = await AxiosContext.get(`/user-consultings/${id}/privacy-term`);
            return { data: data, status: status }
        } catch (error) {
            return { data: null, error: error }
        }
    },
    threePartyTerm: async () => {
        try {
            const { data, status } = await AxiosContext.get(`/user-consultings/3rd-term`);
            return { data: data, status: status }
        } catch (error) {
            return { data: null, error: error }
        }
    },
}