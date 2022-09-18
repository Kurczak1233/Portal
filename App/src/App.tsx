import {
  aboutRoute,
  administrationRoute,
  articleId,
  articleRoute,
  articlesRoute,
  contactRoute,
  createEduLinkRoute,
  createJobOfferRoute,
  createPostRoute,
  dashboardRoute,
  eduLinksRoute,
  errorRoute,
  cooperationsRoute,
  jobOffersRoute,
  postId,
  postsRoute,
  privacyRoute,
  profileRoute,
  roleContactRoute,
  usersRoute,
  detailsRoute,
  cooperationId,
} from "constants/apiRoutes";
import AdministrationLayout from "pages/AdministrationLayout/AdministrationLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLogic from "./AppLogic";
import { Suspense } from "react";
import React from "react";

function App() {
  const CreateEduLinkPage = React.lazy(
    () =>
      import(
        "pages/AdministrationSubpages/ArticlesPage/Create/EduLinks/CreateEduLinkPage"
      )
  );
  const CreateJobOfferPage = React.lazy(
    () =>
      import(
        "pages/AdministrationSubpages/ArticlesPage/Create/JobOffer/CreateJobOfferPage"
      )
  );
  const CreatePostPage = React.lazy(
    () =>
      import(
        "pages/AdministrationSubpages/ArticlesPage/Create/Post/CreatePostPage"
      )
  );
  const EditEduLinkPage = React.lazy(
    () =>
      import(
        "pages/AdministrationSubpages/ArticlesPage/Edit/EduLinks/EditEduLinkPage"
      )
  );
  const EditJobOfferPage = React.lazy(
    () =>
      import(
        "pages/AdministrationSubpages/ArticlesPage/Edit/JobOffers/EditJobOfferPage"
      )
  );
  const EditPostPage = React.lazy(
    () =>
      import(
        "pages/AdministrationSubpages/ArticlesPage/Edit/Posts/EditPostPage"
      )
  );
  const EduLinksPage = React.lazy(
    () =>
      import(
        "pages/AdministrationSubpages/ArticlesPage/Overview/EduLinks/EduLinksPage"
      )
  );
  const JobOffersPage = React.lazy(
    () =>
      import(
        "pages/AdministrationSubpages/ArticlesPage/Overview/JobOffers/JobOffersPage"
      )
  );
  const PostsPage = React.lazy(
    () =>
      import(
        "pages/AdministrationSubpages/ArticlesPage/Overview/Posts/PostsPage"
      )
  );
  const DashboardPage = React.lazy(
    () => import("pages/AdministrationSubpages/DashboardPage/DashboardPage")
  );
  const CooperationsPage = React.lazy(
    () =>
      import("pages/AdministrationSubpages/CooperationsPage/CooperationsPage")
  );
  const ProfilePage = React.lazy(
    () => import("pages/AdministrationSubpages/ProfilePage/ProfilePage")
  );
  const UsersPage = React.lazy(
    () => import("pages/AdministrationSubpages/UsersPage/UsersPage")
  );
  const AboutPage = React.lazy(
    () => import("pages/MainPage/AboutPage/AboutPage")
  );
  const ArticlePage = React.lazy(
    () => import("pages/MainPage/ArticlePage/ArticlePage")
  );
  const ContactPage = React.lazy(
    () => import("pages/MainPage/ContactPage/ContactPage")
  );
  const PrivacyPage = React.lazy(
    () => import("pages/MainPage/PrivacyPage/PrivacyPage")
  );
  const RequestRolePage = React.lazy(
    () => import("pages/RequestRolePage/RequestRolePage")
  );
  const AdminMenuLayout = React.lazy(
    () => import("components/common/AdminMenu/AdminMenuLayout/AdminMenuLayout")
  );
  const ArticleMenuContent = React.lazy(
    () =>
      import(
        "components/common/ArticleCommonComponents/ArticleMenuContent/ArticleMenuContent"
      )
  );
  const MainPageMain = React.lazy(
    () => import("components/MainPageComponents/Main/MainPageMain")
  );
  const ProfilePageMenu = React.lazy(
    () =>
      import(
        "components/ProfilePageComponents/ProfilePageMenu/ProfillePageMenu"
      )
  );
  const MainPage = React.lazy(() => import("./pages/MainPage/MainPage"));
  const CooperationsMenuContent = React.lazy(
    () =>
      import(
        "components/common/ArticleCommonComponents/CooperationsMenuContent/CooperationsMenuContent"
      )
  );
  const CooperationsDetailsPage = React.lazy(
    () =>
      import(
        "pages/AdministrationSubpages/CooperationsDetailsPage/CooperationsDetailsPage"
      )
  );

  const { checkIfRouteIsAuthenticated } = AppLogic();

  return (
    <Router>
      <Suspense fallback={<div />}>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route path={`/${contactRoute}`} element={<ContactPage />} />
            <Route path={`/${privacyRoute}`} element={<PrivacyPage />} />
            <Route path={`/${aboutRoute}`} element={<AboutPage />} />
            <Route
              path={`/${articleRoute}/:${articleId}`}
              element={<ArticlePage />}
            />
            <Route path={`/`} element={<MainPageMain />} />
          </Route>
          <Route path={`${roleContactRoute}`} element={<RequestRolePage />} />
          <Route path={`${errorRoute}`} element={<div>Error page</div>} />
          <Route
            path={`${administrationRoute}`}
            element={checkIfRouteIsAuthenticated(<AdministrationLayout />)}
          >
            <Route
              path={`${articlesRoute}`}
              element={checkIfRouteIsAuthenticated(
                <AdminMenuLayout menuContent={<ArticleMenuContent />} />
              )}
            >
              <Route
                path={`${postsRoute}`}
                element={checkIfRouteIsAuthenticated(<PostsPage />)}
              />
              <Route
                path={`${jobOffersRoute}`}
                element={checkIfRouteIsAuthenticated(<JobOffersPage />)}
              />
              <Route
                path={`${eduLinksRoute}`}
                element={checkIfRouteIsAuthenticated(<EduLinksPage />)}
              />
              <Route
                path={`${postsRoute}/:${postId}`}
                element={checkIfRouteIsAuthenticated(<EditPostPage />)}
              />
              <Route
                path={`${eduLinksRoute}/:${postId}`}
                element={checkIfRouteIsAuthenticated(<EditEduLinkPage />)}
              />
              <Route
                path={`${jobOffersRoute}/:${postId}`}
                element={checkIfRouteIsAuthenticated(<EditJobOfferPage />)}
              />
              <Route
                path={`${createPostRoute}`}
                element={checkIfRouteIsAuthenticated(<CreatePostPage />)}
              />
              <Route
                path={`${createJobOfferRoute}`}
                element={checkIfRouteIsAuthenticated(<CreateJobOfferPage />)}
              />
              <Route
                path={`${createEduLinkRoute}`}
                element={checkIfRouteIsAuthenticated(<CreateEduLinkPage />)}
              />
            </Route>
            <Route
              path={`${profileRoute}`}
              element={checkIfRouteIsAuthenticated(
                <AdminMenuLayout menuContent={<ProfilePageMenu />} />
              )}
            >
              <Route path={""} element={<ProfilePage />} />
            </Route>
            <Route
              path={`${dashboardRoute}`}
              element={checkIfRouteIsAuthenticated(
                <AdminMenuLayout menuContent={<ProfilePageMenu />} />
              )}
            >
              <Route path={``} element={<DashboardPage />} />
            </Route>
            <Route
              path={`${usersRoute}`}
              element={checkIfRouteIsAuthenticated(
                <AdminMenuLayout menuContent={<ProfilePageMenu />} />
              )}
            >
              <Route path={``} element={<UsersPage />} />
            </Route>
            <Route
              path={`${cooperationsRoute}/:${cooperationId}/${detailsRoute}`}
              element={checkIfRouteIsAuthenticated(
                <AdminMenuLayout menuContent={<ProfilePageMenu />} />
              )}
            >
              <Route path={``} element={<CooperationsDetailsPage />} />
            </Route>
            <Route
              path={`${cooperationsRoute}`}
              element={checkIfRouteIsAuthenticated(
                <AdminMenuLayout menuContent={<CooperationsMenuContent />} />
              )}
            >
              <Route path={``} element={<CooperationsPage />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
