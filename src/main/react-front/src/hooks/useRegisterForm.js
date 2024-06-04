import { useState } from 'react';
import axios from "axios";

export default function useRegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [nickname, setNickname] = useState('');
    const [file, setFile] = useState(null);
    const defaultImageUrl = "https://www.flaticon.com/free-icons/user";

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== passwordCheck) {
            alert("비밀번호가 서로 다릅니다. 다시 확인해주세요");
            return;
        }

        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        formData.append('nickname', nickname);
        if (file) {
            formData.append("file", file);
        }

        try {
            const response = await axios.post('/api/auth/register', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert("회원가입에 성공하였습니다.");
        } catch (error) {
            console.error("There was a problem with your axios operation:", error);
            if (error.response && error.response.data)
                alert("회원가입에 실패하였습니다. " + error.response.data);
            else
                alert("회원가입에 실패하였습니다. " + error.message);
        }
    };

    return {
        username, setUsername,
        password, setPassword,
        passwordCheck, setPasswordCheck,
        nickname, setNickname,
        file, setFile,
        handleSubmit
    };
}
