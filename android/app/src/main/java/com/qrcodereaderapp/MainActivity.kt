package com.qrcodereaderapp

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.qrcodereaderapp.modules.SplashScreen.SplashScreenModule

import android.os.Bundle

class MainActivity: ReactActivity() {
  override fun onCreate(savedInstance: Bundle?) {
    // Call before `super.onCreate`
    // setTheme(R.style.AppTheme);s
    SplashScreenModule.show(this)
    super.onCreate(savedInstance)
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "QrCodeReaderApp"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
