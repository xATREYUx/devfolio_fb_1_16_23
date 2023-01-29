import React from "react";
import { AuthProvider } from "./providers/AuthProvider";
import { FirebaseProvider } from "./providers/FirebaseProvider";
import { PostProvider } from "./providers/PostProvider";

import Router from "./routing/Router";
import { ThemeProvider } from "@mui/system";
import Layout from "./components/layout";
import { theme } from "./theme";
import ErrorBoundary from "./components/ErrorBoundary";

export const App = () => {
  //console.log("ENVIRONMENT: ", process.env.NODE_ENV);
  return (
    // <ErrorBoundary section="firebase">
    <FirebaseProvider>
      {/* <ErrorBoundary section="auth"> */}
      <AuthProvider>
        {/* <ErrorBoundary section="post"> */}
        <PostProvider>
          <ThemeProvider theme={theme}>
            <Layout>
              <Router />
            </Layout>
          </ThemeProvider>
        </PostProvider>
        {/* </ErrorBoundary> */}
      </AuthProvider>
      {/* </ErrorBoundary> */}
    </FirebaseProvider>
    // </ErrorBoundary>
  );
};

export default App;
