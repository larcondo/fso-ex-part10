import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import { Formik } from 'formik';
import SignInForm from '../../components/SignInForm';

const credentials = {
  username: 'myuser',
  password: 'sekret123',
};

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {

      const onSubmit = jest.fn();
      render(
        <Formik initialValues={{ username: '', password: '' }} onSubmit={onSubmit}>
          {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
      );

      fireEvent.changeText(screen.getByPlaceholderText('Username'), credentials.username);
      fireEvent.changeText(screen.getByPlaceholderText('Password'), credentials.password);
      fireEvent.press(screen.getByText('Sign in'));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual(credentials);
      });
    });
  });
});