import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { getUserById, updateUser } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
};

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
    }
`;

const UpdateUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async () => {
        try {
            const userData = await getUserById(id);
            setUser(userData);
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };

    const updateUserDetails = async () => {
        try {
            await updateUser(id, user);
            navigate('/all');
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <Container>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="name-input">Name</InputLabel>
                <Input onChange={onValueChange} name="name" value={name} id="name-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="username-input">Username</InputLabel>
                <Input onChange={onValueChange} name="username" value={username} id="username-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="email-input">Email</InputLabel>
                <Input onChange={onValueChange} name="email" value={email} id="email-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="phone-input">Phone</InputLabel>
                <Input onChange={onValueChange} name="phone" value={phone} id="phone-input" />
            </FormControl>
            <FormControl>
                <Button
                    variant="contained"
                    color="primary"
                    style={{ backgroundColor: 'black', color: 'white' }}
                    onClick={updateUserDetails}>Edit User
                </Button>
            </FormControl>
        </Container>
    );
};

export default UpdateUser;
