import { FC } from 'react';

const VerificationSuccessPage: FC = () => {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Email Verified Successfully!
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Your email has been verified. You can now open your app and sign in.
          </p>
          <div className="mt-8">
            <svg
              className="mx-auto h-12 w-12 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationSuccessPage;