import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const getStoredDonations = () => {
    const storedDonateItem = localStorage.getItem('Donated');
    if (storedDonateItem) {
        return JSON.parse(storedDonateItem);
    } else {
        return [];
    }
}

const saveDonations = id => {
    const storedDonations = getStoredDonations();
    const exists = storedDonations.find(donate => donate === id);

    if (!exists) {
        storedDonations.push(id);
        localStorage.setItem('Donated', JSON.stringify(storedDonations));

        toast.success('Donated Successfully', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }else{
        toast.error('Already Donated..', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
}


export { getStoredDonations, saveDonations }