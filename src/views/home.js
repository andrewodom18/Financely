import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import PageHeader from '../components/page-header';
import PageFooter from '../components/page-footer';
import FeatureCard from '../components/feature-card';
import QuestionContainer from '../components/question-container';

import './home.css';


const Home = (props) => {
  return (
    <div className='home-container'>
      <PageHeader />
      <Helmet>
        <title>Financely</title>
        <meta property='og:title' content='Financely' />
      </Helmet>
      <div className='home-hero'>
        <div className='heroContainer home-hero1'>
          <div className='home-container01'>
            <h1 className='home-hero-heading heading1'>
              Simplify Your Finances
            </h1>
            <span className='home-hero-sub-heading bodyLarge'>
              <span>
                <span>
                  <span>All your accounts in one place</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <div className='home-btn-group'>
              <Link
                to='/login'
                id='getStartedButton'
                name='get-started-button'
                className='home-get-started-button buttonFilled'
              >
                Get Started
              </Link>
              <Link
                to='/about'
                id='learnMoreButton'
                name='learn-more-button'
                className='home-learn-more-button buttonFlat'
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='home-features1'>
        <div className='featuresContainer'>
          <div className='home-features2'>
            <div className='home-container02'>
              <span className='overline'>
                <span>features</span>
                <br></br>
              </span>
              <Link to='/features' className='home-navlink'>
                <h2 className='home-features-heading heading2'>
                  Our Key Features
                </h2>
              </Link>
              <span className='home-features-sub-heading bodyLarge'>
                <span>
                  <span>
                    <span>
                      Discover how our platform can help you take control of
                      your finances
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className='home-container03'>
              <FeatureCard
                heading='Connect All Accounts'
                subHeading='Easily link all your financial accounts in one place'
              ></FeatureCard>
              <FeatureCard
                heading='Spending Trends'
                subHeading='Track and analyze your spending habits over time'
              ></FeatureCard>
              <FeatureCard
                heading='Saving Goals'
                subHeading='Set personalized saving goals and monitor your progress'
              ></FeatureCard>
              <FeatureCard
                heading='Budgeting Tools'
                subHeading='Access tools to help you create and stick to a budget'
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className='home-pricing1'>
        <div className='pricingContainer'>
          <div className='home-container04'>
            <span id='pricing' className='overline'>
              <span>Pricing</span>
              <br></br>
            </span>
            <h2 className='heading2'>Choose the Right Plan for You</h2>
            <span className='home-pricing-sub-heading bodyLarge'>
              <span>
                <span>Upgrade your financial management experience today</span>
              </span>
            </span>
          </div>
          <div className='home-container05'>
            <div className='freePricingCard home-pricing-card'>
              <div className='home-container06'>
                <span className='home-text36 heading3'>Free</span>
                <span className='bodySmall'>
                  Get started with our basic features for free
                </span>
              </div>
              <div className='home-container07'>
                <span className='home-text37'>
                  <span>$</span>
                  <span></span>
                </span>
                <span className='home-free-plan-price'>0</span>
              </div>
              <div className='home-container08'>
                <div className='home-container09'>
                  <span className='home-text40'>✔</span>
                  <span className='bodySmall'>
                    Connect unlimited financial accounts
                  </span>
                </div>
                <div className='home-container10'>
                  <span className='home-text41'>✔</span>
                  <span className='bodySmall'>
                    Track spending and saving trends
                  </span>
                </div>
                <div className='home-container11'>
                  <span className='home-text42'>✔</span>
                  <span className='bodySmall'>Set budget goals</span>
                </div>
                <div className='home-container12'>
                  <span className='home-text43'>✔</span>
                  <span className='bodySmall'>
                    Receive personalized financial insights
                  </span>
                </div>
              </div>
              <button type='button' className='home-button buttonOutline'>
                Continue with Free
              </button>
            </div>
            <div className='basicPricingCard home-pricing-card1'>
              <div className='home-container13'>
                <span className='home-text44 heading3'>BASIC</span>
                <span className='bodySmall'>
                  Unlock more advanced features with our Basic plan
                </span>
              </div>
              <div className='home-container14'>
                <span className='home-text45'>
                  <span>$</span>
                  <span></span>
                </span>
                <span className='home-basic-plan-pricing'>1.99</span>
                <span className='home-text48'>/ month</span>
              </div>
              <div className='home-container15'>
                <div className='home-container16'>
                  <span className='home-text49'>✔</span>
                  <span className='bodySmall'>All features of FREE plan</span>
                </div>
                <div className='home-container17'>
                  <span className='home-text51'>✔</span>
                  <span className='bodySmall'>All Free plan features</span>
                </div>
                <div className='home-container18'>
                  <span className='home-text52'>✔</span>
                  <span className='bodySmall'>
                    Customize spending categories
                  </span>
                </div>
                <div className='home-container19'>
                  <span className='home-text53'>✔</span>
                  <span className='bodySmall'>
                    View detailed transaction analysis
                  </span>
                </div>
                <div className='home-container20'>
                  <span className='home-text54'>✔</span>
                  <span className='bodySmall'>Export data to CSV</span>
                </div>
              </div>
              <button
                type='button'
                className='home-button1 buttonFilledSecondary'
              >
                Try the Basic plan
              </button>
            </div>
            <div className='proPricingCard home-pricing-card2'>
              <div className='home-container21'>
                <span className='home-text55 heading3'>
                  <span>PRO</span>
                  <br></br>
                </span>
                <span className='bodySmall'>
                  Access premium features with our Pro plan
                </span>
              </div>
              <div className='home-container22'>
                <span className='home-text58'>
                  <span>$</span>
                  <span></span>
                </span>
                <span className='home-pro-plan-pricing'>3.99</span>
                <span className='home-text61'>/ month</span>
              </div>
              <div className='home-container23'>
                <div className='home-container24'>
                  <span className='home-text62'>✔</span>
                  <span className='bodySmall'> All features of BASIC plan</span>
                </div>
                <div className='home-container25'>
                  <span className='home-text64'>✔</span>
                  <span className='bodySmall'>All Basic plan features</span>
                </div>
                <div className='home-container26'>
                  <span className='home-text65'>✔</span>
                  <span className='bodySmall'>
                    Create multiple budget scenarios
                  </span>
                </div>
                <div className='home-container27'>
                  <span className='home-text66'>✔</span>
                  <span className='bodySmall'>
                    Receive priority customer support
                  </span>
                </div>
                <div className='home-container28'>
                  <span className='home-text67'>✔</span>
                  <span className='bodySmall'>Ad-free experience</span>
                </div>
              </div>
              <button
                type='button'
                className='home-button2 buttonFilledSecondary'
              >
                Try the PRO plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='home-banner'>
        <div className='bannerContainer home-banner1'>
          <h1 className='home-banner-heading heading2'>
            Take Control of Your Money
          </h1>
          <span className='home-banner-sub-heading bodySmall'>
            <span>
              <span>
                <span>
                  Connect all your financial accounts to our platform and gain
                  insights into your spending and saving habits. Our dashboard
                  provides a comprehensive overview of your financial health,
                  helping you make informed decisions for a secure future.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
          </span>
          <Link
            to='/about'
            name='learn-more-button'
            className='home-learn-more-button1 buttonFilled'
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className='home-faq'>
        <div className='faqContainer'>
          <div className='home-faq1'>
            <div className='home-container29'>
              <span className='overline'>
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className='home-text85 heading2'>Common questions</h2>
              <span className='home-text86 bodyLarge'>
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className='home-container30'>
              <QuestionContainer
                answer='We use bank-level encryption to ensure the security of your financial information.'
                question='How secure is my financial data on your platform?'
              ></QuestionContainer>
              <QuestionContainer
                answer='Yes, you can connect all your bank accounts, credit cards, and investment accounts for a comprehensive view of your finances.'
                question='Can I link all my financial accounts to the dashboard?'
              ></QuestionContainer>
              <QuestionContainer
                answer='Our system categorizes your transactions and provides insights into your spending habits over time.'
                question='How does the dashboard monitor my spending trends?'
              ></QuestionContainer>
              <QuestionContainer
                answer='Our basic dashboard is free to use, but we offer premium features for a subscription fee.'
                question='Is there a fee for using your financial dashboard?'
              ></QuestionContainer>
              <QuestionContainer
                answer='Yes, you can set savings goals within the dashboard and track your progress towards achieving them.'
                question='Can I set savings goals and track my progress?'
              ></QuestionContainer>
            </div>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

export default Home;
