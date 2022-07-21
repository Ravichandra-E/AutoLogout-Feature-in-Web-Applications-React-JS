# AutoLogout-Feature-in-Web-Applications-React-JS

Implementing AutoLogout Feature in Web Applications (React-JS)

We want to make sure the application logs user out automatically after 10 mins of inactivity.

**Basics**

To start, we create an **AppLogout** component which will wrap the authenticated components and in which we shall implement the logout feature.

NOTE: This can be done in the entry file of our main layout. But it's okay to create a separate component for separation of concerns.

In MainDashboardEntry (this should be the base entry file for all authenticated routes),

Example: const MainDashboardEntry = () => {
    return (
        <AppLogout>
            <Home />
        </AppLogout>
    )
}
export default MainDashboardEntry

