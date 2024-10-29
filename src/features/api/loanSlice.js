import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const getToken = () => localStorage.getItem('token');

export const loanSlice = createApi({
    reducerPath: "LoanApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5085',
        prepareHeaders: (headers) => {
            const token = getToken();
            if (token) {
                headers.set('Authorization', `Bearer ${token}`); // Agrega el token al encabezado
            }
            return headers;
        },
    }), // Hace las veces de Axios
    endpoints: (builder) => ({
        getLoans: builder.query({
            query: () => '/Loans',
            providesTags: ['Loan'] // Me permite ejecutar un llamado
        }),
        getLoanById: builder.query({
            query: (_id) => '/Loans/' + _id,
            providesTags: ['Loan']
        }),
        createLoan: builder.mutation({
            query: (newLoan) => ({
                url: '/Loans',
                method: 'POST',
                body: newLoan
            }),
            invalidatesTags: ["Loan"] // Se ejecuta cuando hay un cambio en la BD
        }),
        updateLoan: builder.mutation({
            query: (Loan) => ({
                url: `/Loans/${Loan.id}`,
                method: 'PUT',
                body: Loan
            }),
            invalidatesTags: ["Loan", "Loan"]
        }),
        deleteLoan: builder.mutation({
            query: (_id) => ({
                url: `/Loans/${_id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Loan"]
        }),
    })    
})

/** Segun la nomenclatura de la libreria se usa use al principio 
 * y Query o Mutation al final segun corresponda */
export const { useGetLoansQuery, 
                useGetLoanByIdQuery, 
                useCreateLoanMutation, 
                useUpdateLoanMutation,
                useDeleteLoanMutation,
                useUploadAvatarMutation,
                useLoginMutation
        } = loanSlice
