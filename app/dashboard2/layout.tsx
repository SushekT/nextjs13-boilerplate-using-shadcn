import "@/styles/globals.css"
import "@/styles/style.css"
import "@/styles/vendors/feather/feather.css";
import "@/styles/vendors/mdi/css/materialdesignicons.min.css";
import "@/styles/vendors/ti-icons/css/themify-icons.css";
import "@/styles/vendors/typicons/typicons.css";
import "@/styles/vendors/simple-line-icons/css/simple-line-icons.css";
import "@/styles/vendors/css/vendor.bundle.base.css";
import "@/js/select.dataTables.min.css"

import { Metadata } from "next"
import Image from "next/image"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="container-scroller">
      <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
          <div className="me-3">
            <button
              className="navbar-toggler navbar-toggler align-self-center"
              type="button"
              data-bs-toggle="minimize"
            >
              <span className="icon-menu"></span>
            </button>
          </div>
          <div>
            <a className="navbar-brand brand-logo" href="index.html">
              <Image src="https://png.pngtree.com/element_our/png/20180918/simple-eagle-logo-png_100655.jpg" alt="logo" width={500} height={500} />
            </a>
            <a className="navbar-brand brand-logo-mini" href="index.html">
              <Image src="https://png.pngtree.com/element_our/png/20180918/simple-eagle-logo-png_100655.jpg" alt="logo" width={500} height={500} />
            </a>
          </div>
        </div>

        <div className="navbar-menu-wrapper d-flex align-items-top">
          <ul className="navbar-nav">
            <li className="nav-item font-weight-semibold d-none d-lg-block ms-0">
              <h1 className="welcome-text">
                Good Morning,{" "}
                <span className="text-black fw-bold">John Doe</span>
              </h1>
              <h3 className="welcome-sub-text">
                Your performance summary this week{" "}
              </h3>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown d-none d-lg-block">
              <a
                className="nav-link dropdown-bordered dropdown-toggle dropdown-toggle-split"
                id="messageDropdown"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {" "}
                Select Category{" "}
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
                aria-labelledby="messageDropdown"
              >
                <a className="dropdown-item py-3">
                  <p className="mb-0 font-weight-medium float-left">
                    Select category
                  </p>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item preview-item">
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis font-weight-medium text-dark">
                      Bootstrap Bundle{" "}
                    </p>
                    <p className="fw-light small-text mb-0">
                      This is a Bundle featuring 16 unique dashboards
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis font-weight-medium text-dark">
                      Angular Bundle
                    </p>
                    <p className="fw-light small-text mb-0">
                      Everything you’ll ever need for your Angular projects
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis font-weight-medium text-dark">
                      VUE Bundle
                    </p>
                    <p className="fw-light small-text mb-0">
                      Bundle of 6 Premium Vue Admin Dashboard
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis font-weight-medium text-dark">
                      React Bundle
                    </p>
                    <p className="fw-light small-text mb-0">
                      Bundle of 8 Premium React Admin Dashboard
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item d-none d-lg-block">
              <div
                id="datepicker-popup"
                className="input-group date datepicker navbar-date-picker"
              >
                <span className="input-group-addon input-group-prepend border-right">
                  <span className="icon-calendar input-group-text calendar-icon"></span>
                </span>
              </div>
            </li>
            <li className="nav-item">
              <form className="search-form" action="#">
                <i className="icon-search"></i>
              </form>
            </li>
            Name
            <li className="nav-item dropdown">
              <a
                className="nav-link count-indicator"
                id="notificationDropdown"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i className="icon-mail icon-lg"></i>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
                aria-labelledby="notificationDropdown"
              >
                <a className="dropdown-item py-3 border-bottom">
                  <p className="mb-0 font-weight-medium float-left">
                    You have 4 new notifications{" "}
                  </p>
                  <span className="badge badge-pill badge-primary float-right">
                    View all
                  </span>
                </a>
                <a className="dropdown-item preview-item py-3">
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-alert m-auto text-primary"></i>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject fw-normal text-dark mb-1">
                      Application Error
                    </h6>
                    <p className="fw-light small-text mb-0"> Just now </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item py-3">
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-settings m-auto text-primary"></i>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject fw-normal text-dark mb-1">
                      Settings
                    </h6>
                    <p className="fw-light small-text mb-0">
                      {" "}
                      Private message{" "}
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item py-3">
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-airballoon m-auto text-primary"></i>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject fw-normal text-dark mb-1">
                      New user registration
                    </h6>
                    <p className="fw-light small-text mb-0"> 2 days ago </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link count-indicator"
                id="countDropdown"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="icon-bell"></i>
                <span className="count"></span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
                aria-labelledby="countDropdown"
              >
                <a className="dropdown-item py-3">
                  <p className="mb-0 font-weight-medium float-left">
                    You have 7 unread mails{" "}
                  </p>
                  <span className="badge badge-pill badge-primary float-right">
                    View all
                  </span>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <Image
                      src=""
                      alt="image"
                      className="img-sm profile-pic"
                      width={10}
                      height={10}
                    />
                  </div>
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis font-weight-medium text-dark">
                      Marian Garner{" "}
                    </p>
                    <p className="fw-light small-text mb-0">
                      {" "}
                      The meeting is cancelled{" "}
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <Image
                      src=""
                      alt="image"
                      className="img-sm profile-pic"
                      width={10}
                      height={10}
                    />
                  </div>
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis font-weight-medium text-dark">
                      David Grey{" "}
                    </p>
                    <p className="fw-light small-text mb-0">
                      {" "}
                      The meeting is cancelled{" "}
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <Image
                      src=""
                      alt="image"
                      className="img-sm profile-pic"
                      width={10}
                      height={10}
                    />
                  </div>
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis font-weight-medium text-dark">
                      Travis Jenkins{" "}
                    </p>
                    <p className="fw-light small-text mb-0">
                      {" "}
                      The meeting is cancelled{" "}
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown d-none d-lg-block user-dropdown">
              <a
                className="nav-link"
                id="UserDropdown"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Image
                  className=""
                  src=""
                  alt="Profile image"
                  width={10}
                  height={10}
                />{" "}
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown"
                aria-labelledby="UserDropdown"
              >
                <div className="dropdown-header text-center">
                  <Image
                    className="img-md rounded-circle"
                    src=""
                    alt="Profile image"
                    width={10}
                    height={10}
                  />
                  <p className="mb-1 mt-3 font-weight-semibold">Allen Moreno</p>
                  <p className="fw-light text-muted mb-0">
                    allenmoreno@gmail.com
                  </p>
                </div>
                <a className="dropdown-item">
                  <i className="dropdown-item-icon mdi mdi-account-outline text-primary me-2"></i>{" "}
                  My Profile{" "}
                  <span className="badge badge-pill badge-danger">1</span>
                </a>
                <a className="dropdown-item">
                  <i className="dropdown-item-icon mdi mdi-message-text-outline text-primary me-2"></i>{" "}
                  Messages
                </a>
                <a className="dropdown-item">
                  <i className="dropdown-item-icon mdi mdi-calendar-check-outline text-primary me-2"></i>{" "}
                  Activity
                </a>
                <a className="dropdown-item">
                  <i className="dropdown-item-icon mdi mdi-help-circle-outline text-primary me-2"></i>{" "}
                  FAQ
                </a>
                <a className="dropdown-item">
                  <i className="dropdown-item-icon mdi mdi-power text-primary me-2"></i>
                  Sign Out
                </a>
              </div>
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-bs-toggle="offcanvas"
          >
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
      <div className="container-fluid page-body-wrapper">
        <div className="theme-setting-wrapper">
          <div id="settings-trigger">
            <i className="ti-settings"></i>
          </div>
          <div id="theme-settings" className="settings-panel">
            <i className="settings-close ti-close"></i>
            <p className="settings-heading">SIDEBAR SKINS</p>
            <div
              className="sidebar-bg-options selected"
              id="sidebar-light-theme"
            >
              <div className="img-ss rounded-circle bg-light border me-3"></div>
              Light
            </div>
            <div className="sidebar-bg-options" id="sidebar-dark-theme">
              <div className="img-ss rounded-circle bg-dark border me-3"></div>
              Dark
            </div>
            <p className="settings-heading mt-2">HEADER SKINS</p>
            <div className="color-tiles mx-0 px-4">
              <div className="tiles success"></div>
              <div className="tiles warning"></div>
              <div className="tiles danger"></div>
              <div className="tiles info"></div>
              <div className="tiles dark"></div>
              <div className="tiles default"></div>
            </div>
          </div>
        </div>
        <div id="right-sidebar" className="settings-panel">
          <i className="settings-close ti-close"></i>
          <ul
            className="nav nav-tabs border-top"
            id="setting-panel"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                id="todo-tab"
                data-bs-toggle="tab"
                href="#todo-section"
                role="tab"
                aria-controls="todo-section"
                aria-expanded="true"
              >
                TO DO LIST
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="chats-tab"
                data-bs-toggle="tab"
                href="#chats-section"
                role="tab"
                aria-controls="chats-section"
              >
                CHATS
              </a>
            </li>
          </ul>
          <div className="tab-content" id="setting-content">
            <div
              className="tab-pane fade show active scroll-wrapper"
              id="todo-section"
              role="tabpanel"
              aria-labelledby="todo-section"
            >
              <div className="add-items d-flex px-3 mb-0">
                <form className="form w-100">
                  <div className="form-group d-flex">
                    <button
                      type="submit"
                      className="add btn btn-primary todo-list-add-btn"
                      id="add-task"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                <i className="mdi mdi-grid-large menu-icon"></i>
                <span className="menu-title">Dashboard</span>
              </a>
            </li>
            <li className="nav-item nav-category">UI Elements</li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="collapse"
                href="#ui-basic"
                aria-expanded="false"
                aria-controls="ui-basic"
              >
                <i className="menu-icon mdi mdi-floor-plan"></i>
                <span className="menu-title">UI Elements</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="ui-basic">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/ui-features/buttons.html"
                    >
                      Buttons
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/ui-features/dropdowns.html"
                    >
                      Dropdowns
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/ui-features/typography.html"
                    >
                      Typography
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item nav-category">Forms and Datas</li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="collapse"
                href="#form-elements"
                aria-expanded="false"
                aria-controls="form-elements"
              >
                <i className="menu-icon mdi mdi-card-text-outline"></i>
                <span className="menu-title">Form elements</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="form-elements">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="pages/forms/basic_elements.html"
                    >
                      Basic Elements
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="collapse"
                href="#charts"
                aria-expanded="false"
                aria-controls="charts"
              >
                <i className="menu-icon mdi mdi-chart-line"></i>
                <span className="menu-title">Charts</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="charts">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/charts/chartjs.html">
                      ChartJs
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="collapse"
                href="#tables"
                aria-expanded="false"
                aria-controls="tables"
              >
                <i className="menu-icon mdi mdi-table"></i>
                <span className="menu-title">Tables</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="tables">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/tables/basic-table.html"
                    >
                      Basic table
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="collapse"
                href="#icons"
                aria-expanded="false"
                aria-controls="icons"
              >
                <i className="menu-icon mdi mdi-layers-outline"></i>
                <span className="menu-title">Icons</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="icons">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/icons/mdi.html">
                      Mdi icons
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item nav-category">pages</li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="collapse"
                href="#auth"
                aria-expanded="false"
                aria-controls="auth"
              >
                <i className="menu-icon mdi mdi-account-circle-outline"></i>
                <span className="menu-title">User Pages</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="auth">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/login.html">
                      {" "}
                      Login{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item nav-category">help</li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="http://bootstrapdash.com/demo/star-admin2-free/docs/documentation.html"
              >
                <i className="menu-icon mdi mdi-file-document"></i>
                <span className="menu-title">Documentation</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
