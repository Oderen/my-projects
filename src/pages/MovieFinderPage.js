import React from 'react';
import ReactPlayer from 'react-player';
import css from './MovieFinder.module.css';

const Flopify = () => {
  return (
    <div className={css.container}>
      <div className={css.description}>
        <h1 className={css.description__title}>Flopify</h1>
        <h2 className={css.description_detailTittle}>Project details:</h2>
        <div className={css.textContainer}>
          <p
            style={{
              color: 'black',
              fontFamily: 'Roboto',
              fontWeight: 'normal',
            }}
          >
            <strong>What is it? </strong>Mobile application for sharing a photos
            with others. Here you can publish your pictures and comment/like
            images of others.
          </p>
        </div>
        <h3 style={{ margin: 0, textAlign: 'center' }}>Features:</h3>
        <div className={css.description__listContainer}>
          <ul className={css.description__list}>
            <li style={{ color: 'black', fontFamily: 'Roboto sans-serif' }}>
              <div>
                <p
                  style={{
                    color: 'black',
                    fontFamily: 'Roboto',
                    fontWeight: 'normal',
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  React Native
                </p>
                <ul style={{ margin: 0, paddingLeft: 20 }}>
                  <li
                    style={{
                      color: 'black',
                      fontFamily: 'Roboto sans-serif',
                      fontWeight: 'normal',
                    }}
                  >
                    Native Components: geolocation, camera, maps, image picker
                  </li>
                  <li
                    style={{
                      color: 'black',
                      fontFamily: 'Roboto sans-serif',
                      fontWeight: 'normal',
                      marginBottom: 10,
                    }}
                  >
                    React Navigation Library
                  </li>
                </ul>
              </div>
            </li>
            <li
              style={{
                color: 'black',
                fontFamily: 'Roboto',
                fontWeight: 'normal',
              }}
            >
              Firebase
            </li>
            <li style={{ color: 'black', fontFamily: 'Roboto' }}>
              React Redux
            </li>
            <li style={{ color: 'black', fontFamily: 'Roboto' }}>
              Responsive/Adaptive Mark up
            </li>
          </ul>
        </div>
      </div>

      <div className={css.content}>
        <div className={css.videoContainer}>
          <ReactPlayer
            url="https://youtu.be/Kb4xok6yZjg"
            playing={false}
            controls={true}
          />
        </div>
        <div className={css.deskopDescription}>
          <h1
            style={{
              color: 'black',
              fontSize: 65,
              fontFamily: 'Roboto sans-serif',
              margin: 0,
            }}
          >
            Flopify
          </h1>
          <h2 className={css.description_title}>Project details:</h2>
          <p
            style={{
              color: 'black',
              fontFamily: 'Roboto sans-serif',
              fontWeight: 'normal',
            }}
          >
            <strong>What is it? </strong>Mobile application for sharing a photos
            with others. Here you can publish your pictures and comment/like
            images of others.
          </p>
          <h3 style={{ margin: 0 }}>Features:</h3>
          <ul className={css.description__list}>
            <li style={{ color: 'black', fontFamily: 'Roboto sans-serif' }}>
              <div>
                <p
                  style={{
                    color: 'black',
                    fontFamily: 'Roboto sans-serif',
                    fontWeight: 'normal',
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  React Native
                </p>
                <ul style={{ margin: 0 }}>
                  <li
                    style={{
                      color: 'black',
                      fontFamily: 'Roboto sans-serif',
                      fontWeight: 'normal',
                    }}
                  >
                    Native Components: geolocation, camera, maps, image picker
                  </li>
                  <li
                    style={{
                      color: 'black',
                      fontFamily: 'Roboto sans-serif',
                      fontWeight: 'normal',
                      marginBottom: 10,
                    }}
                  >
                    React Navigation Library
                  </li>
                </ul>
              </div>
            </li>
            <li
              style={{
                color: 'black',
                fontFamily: 'Roboto sans-serif',
                fontWeight: 'normal',
              }}
            >
              Firebase
            </li>
            <li style={{ color: 'black', fontFamily: 'Roboto sans-serif' }}>
              React Redux
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Flopify;
