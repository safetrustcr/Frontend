const LoginForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-light-primary dark:text-dark-primary"
        >
          Email or username
        </label>
        <input
          id="email"
          type="email"
          placeholder="bartoon_bell@gmail.com"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-default-color text-black"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-light-primary dark:text-dark-primary"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="********"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-default-color text-black"
        />
      </div>
      <div className="flex items-center justify-between">
        <label className="flex items-center text-light-primary dark:text-dark-primary text-sm">
          <input type="checkbox" className="mr-2 rounded" />
          Remember me
        </label>
        <a
          href="/auth/ForgotPassword"
          className="text-sm text-default-color hover:underline"
        >
          Forgot your password?
        </a>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-default-color text-white rounded-md hover:bg-default-color"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
