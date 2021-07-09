import React from "react";
// nodejs library that concatenates classes
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import DashboardIcon from "@material-ui/icons/Dashboard";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import WorkIcon from "@material-ui/icons/Work";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import LayersIcon from '@material-ui/icons/Layers';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
// import Footer from "components/Footer/Footer.js";1

import HeaderLinks from "components/Header/HeaderLinks.js";

// import profile from "assets/img/faces/christian.jpg";

import styles from "assets/jss/material-kit-react/views/dashboardPage.js";
// import StartupForm from "views/UserDashboard/StartUp/Enroll.js";
// import DashboardBasicDetails from "views/UserDashboard/DashboardBasicDetails/DashboardBasicDetails.js";
// import JobSeekerForm from "views/UserDashboard/JobSeeker/JobSeekerEnroll.js";
// import TrainerForm from "views/UserDashboard/Trainer/TrainerEnroll.js";
// import InvestorForm from "views/UserDashboard/Investor/InvestorEnroll.js";

const useStyles = makeStyles(styles);

export default function AdminHeader(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const totalTabs = [
    "#basic",
    "#trainer",
    "#startup",
    "#investor",
    "#jobseeker",
  ];
  const selectedTab = props?.location?.hash?.toLowerCase();
  let selectedTabValue = 0;
  if (totalTabs.includes(selectedTab)) {
    switch (selectedTab) {
      case "#startup":
        selectedTabValue = 1;
        break;
      case "#trainer":
        selectedTabValue = 2;
        break;
      case "#jobseeker":
        selectedTabValue = 3;
        break;
      case "#investor":
        selectedTabValue = 4;
        break;
      default:
    }
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header
        color="white"
        brand="My HashCode"
        rightLinks={<HeaderLinks />}
        fixed
        {...rest}
      />
      <div className={classes.mainContainer}>
        <div className={classes.container}>
          <GridContainer justify="center" spacing={1}>
            {/* <GridItem xs={3} sm={3} md={3} lg={3}>
								<div className={classes.sidebar}>
									<div className={classes.imageSection}>
										<div className={classes.imgOuterDiv}>
											{userInfo.imageUrl ? (
												<img src={userInfo.imageUrl} alt="..." className={imageClasses} />
											) : (
												<img src={userImg} alt="..." className={imageClasses} />
											)}
										</div>
										<div className={classes.name}>{userInfo.name ? userInfo.name : 'No Name'}</div>
										<div>
											<Link to="/profile" className={classes.profile}>
												View Profile
											</Link>
										</div>
									</div>
									<div className={classes.nameSection}>
										<div className={classes.name}>
											{userInfo.email ? userInfo.email : 'No Email'}
										</div>
										<div>{userInfo.mobile ? userInfo.mobile : 'No Mobile'}</div>
									</div>
									<div className={classes.profileCompleteness}>
										<div className={classes.name}>Profile Completeness</div>
									</div>
								</div>
							</GridItem> */}
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <div className={classes.content}>
                <CustomTabs
                  headerColor="primary"
                  tabValue={selectedTabValue}
                  tabs={[
                    {
                      tabName: "Dashboard",
                      tabIcon: DashboardIcon,
                    //   tabContent: <DashboardBasicDetails {...props} />,
                    },
                    {
                      tabName: "startups",
                      tabIcon: WbIncandescentIcon,
                    //   tabContent: <StartupForm {...props} />,
                    },
                    {
                      tabName: "trainers",
                      tabIcon: CastForEducationIcon,
                    //   tabContent: <TrainerForm {...props} />,
                    },
                    {
                      tabName: "internships",
                      tabIcon: WorkIcon,
                    //   tabContent: <JobSeekerForm {...props} />,
                    },
                    {
                      tabName: "Courses",
                      tabIcon: LayersIcon,
                    //   tabContent: <InvestorForm {...props} />,
                    },
                  ]}
                />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>

    </div>
  );
}