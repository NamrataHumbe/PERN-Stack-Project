import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material';
import { getUsers, deleteUser } from '../service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px auto;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #888888;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td {
        font-size: 18px;
    }
`;

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        try {
            await deleteUser(id);
            getAllUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const getAllUsers = async () => {
        try {
            const response = await getUsers();
            setUsers(response);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Actions</TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button
                                color="primary"
                                variant="contained"
                                style={{ backgroundColor: 'black', color: 'white', marginRight: 10 }}
                                component={Link}
                                to={`/update/${user.id}`}
                            >
                                Edit
                            </Button>
                            <Button
                                color="secondary"
                                variant="contained"
                                style={{ backgroundColor: 'brown', color: 'white' }}
                                onClick={() => deleteUserData(user.id)}
                            >
                                Delete
                            </Button>
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    );
};

export default AllUsers;
