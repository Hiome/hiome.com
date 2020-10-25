import React from 'react'

import Layout from '../../../components/layout'
import FaqItem from '../../../components/FaqItem'
import SEO from '../../../components/seo'

import './styles.css'

import SetupCoreImg from '../../../components/images/SetupCoreImg'
import SetupBracketImg from '../../../components/images/SetupBracketImg'
import SetupFrameImg from '../../../components/images/SetupFrameImg'
import SetupMagnetImg from '../../../components/images/SetupMagnetImg'
import SetupRecessedSensorImg from '../../../components/images/SetupRecessedSensorImg'
import SetupRecessedMagnetImg from '../../../components/images/SetupRecessedMagnetImg'
import SetupBatteryTemplateImg from '../../../components/images/SetupBatteryTemplateImg'

const SetupIndexPage = () => (
  <Layout>
    <SEO title="Hiome Setup" />
    <h1>Setting Up Hiome</h1>

    <div className="setupguide">

    <h2>1. Connect Hiome Core to your router and power.</h2>

    <p>Use the black power adapter or any 5V 3A microUSB power supply.</p>
    <p>Hiome Core will light up while it connects to your network, and may take up to 10 minutes to finish booting. You can move on to the next step while it gets ready.</p>

    <SetupCoreImg />

    <FaqItem title="Setup Hiome Door (Wired)" height="2000px">
      <h2>2. Connect Hiome Door to the mounting bracket.</h2>
      <SetupBracketImg />

      <h2>3. Stick Hiome Door to the bottom of your door frame.</h2>
      <p>You can cut the bracket with scissors if necessary to make it fit on your frame, and then apply 1-2 command strips to mount the bracket to the frame as shown.</p>
      <SetupFrameImg />

      <h2>4. Stick magnet to the back of your door (if applicable) for door open/close state.</h2>
      <SetupMagnetImg />

      <h2>5. Plug in Hiome Door with a microUSB cable and power adapter.</h2>
      <p>You can use the gaffer tape or nails to hold the wire in place. Stand at least 5 feet (2 meters) away while the sensor calibrates.</p>

      <h2>6. Go to <a href="http://hiome.local">http://hiome.local</a> on your phone to finish setup!</h2>
    </FaqItem>

    <FaqItem title="Setup Hiome Door (Recessed)" height="1500px">
      <h2>2. Embed Hiome Door into your door frame.</h2>
      <SetupRecessedSensorImg />

      <h2>3. Embed magnet into the top of your door (if applicable) for door open/close state.</h2>
      <SetupRecessedMagnetImg />

      <h2>4. Power Hiome Door with a 3.7-12V supply.</h2>
      <p>Hiome Door will draw less than 500mA of current. Stand at least 5 feet (2 meters) away while the sensor calibrates.</p>

      <h2>5. Go to <a href="http://hiome.local">http://hiome.local</a> on your phone to finish setup!</h2>
    </FaqItem>

    <FaqItem title="Setup Hiome Door (Battery)" height="3000px">
      <h2>2. Connect Hiome Door to the mounting bracket.</h2>
      <SetupBracketImg />

      <h2>3. Stick Hiome Door to the bottom of your door frame.</h2>
      <p>You can cut the bracket with scissors if necessary to make it fit on your frame, and then apply 1-2 command strips to mount the bracket to the frame as shown.</p>
      <SetupFrameImg />

      <h2>4. Stick magnet to the back of your door (if applicable) for door open/close state.</h2>
      <SetupMagnetImg />

      <h2>5. Hold Hiome PowerPack template on the wall above your door.</h2>
      <p>Use the USB cable as a guide to make sure you don't place it too high.</p>
      <p>Mark where the circled holes are with a pen. Remove the template and drill the mounting screws into both points. <strong>The screws should be sticking out about 0.25 inches (5mm)</strong> from the wall.</p>
      <SetupBatteryTemplateImg />

      <h2>6. Hang Hiome PowerPack on the screws and plug it in to Hiome Door.</h2>
      <p>Stand at least 5 feet (2 meters) away while the sensor calibrates.</p>
      <p>Hiome Core will notify you when the battery is running low. You can use the black microUSB power adapter (or any 5V 3A power supply) to recharge your Hiome PowerPack. The microUSB port is on the bottom of Hiome PowerPack.</p>

      <h2>7. Go to <a href="http://hiome.local">http://hiome.local</a> on your phone to finish setup!</h2>
    </FaqItem>
    </div>

    <p style={{
      textAlign: `center`,
      marginTop: `4rem`,
      fontSize: `1.2rem`,
    }}>Have questions? <a href="mailto:support@hiome.com">Email support@hiome.com</a></p>
  </Layout>
)

export default SetupIndexPage
