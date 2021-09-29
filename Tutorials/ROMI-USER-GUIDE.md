# Romi User Guide

This guide aims to provide an introduction to starting up and working with a Romi. 

# Table of Contents
1. [Introduction](#Introduction)
2. [Booting Up a Romi](#Booting-Up-a-Romi)
3. [Running Your First Romi Program](#Running-Your-First-Romi-Program)
4. [Further Learning with the Romi](#Further-Learning-with-the-Romi)

## Introduction 
What is a Romi? Simply put, it is a scaled-down version of a standard FRC robot. While it lacks some functionality compared to a normal FRC robot, such as the ability to use pneumatics, it is a great tool for teaching the basics of robot software. 

A Romi is made up of a 32U4 Control Board and a Raspberry Pi 3B+. It also contains an IMU (Inertial Measurement Unit), 2 geared motors with encoders, LEDs (Light Emitting Diodes), pushbuttons, and configurable GPIO (General-Purpose Input/Output) channels. 

## Booting Up a Romi
To set up a Romi for the first time, you will need a microSD Card as well as an adapter to either USB or a standard SD port. The Raspberry Pi on the Romi needs to be imaged with the WPILibPi (formerly FRCVision) image. To do so, download the Romi image from [GitHub](https://github.com/wpilibsuite/WPILibPi/releases) in the "Assets" section. [The image](https://docs.wpilib.org/en/stable/_images/romi-download.png) will have a "-Romi" suffix.

Extract the folder, and plug in the microSD into your computer via an adapter. Download [Balena Etcher](https://www.balena.io/etcher/) and use it to transfer the WPILibPi image to the microSD card. Etcher should look [similar to this](https://docs.wpilib.org/en/stable/_images/flash-etcher.png). Once the microSD card is imaged, insert it into the Raspberry Pi and power it up. 

To test if your Pi has booted up successfully, connect it to ethernet (and preferrably your computer as well, although if using the Romi at home, doing so is unnecessary) and in your browser, connect to ```http://wpilibpi.local/``` or ```10.0.0.2```. If your Pi has booted up successfully, [this screen](https://docs.wpilib.org/en/stable/_images/system-status.png) should pop up. If it does not, try connecting your computer to ethernet as well and repeat. 

To connect your computer to the Romi wirelessly, try to find a "WPILibPi" network name and connect to it. The generic password for any Romi is ```WPILib2021!```. If connection is successful, congratulations! You are now able to run your first Romi program!

## Running Your First Romi Program
To run your first Romi program, open up Visual Studio Code (if installed properly, your VS Code IDE will also have the WPILib extension). FRC already gives us a sample program for the Romi called ```RomiReference```. To open this program, type ```Ctrl-Shift-P``` in your IDE and search up ```WPILib: Create a New Project```. This should open up to [this page](https://docs.wpilib.org/en/stable/_images/new-project-creator.png). 
To run your Romi Program, connect to the Romi's WiFi (See "Booting Up a Romi" for more details on connecting to a Romi) and in VS Code, type ```Ctrl-Shift-P``` again, this time typing in "WPILib: Simulate Robot Code on Desktop", as is shown in [the folliwing image](https://docs.wpilib.org/en/stable/_images/romi-vscode-new-project.png). CLick on the [box](https://docs.wpilib.org/en/stable/_images/romi-vscode-select-type.png) titled "Select a project type (Example or Template)" and select "Example". Then, click on the box titled "Select a Language" and choose "java". Finally, click on the [box](https://docs.wpilib.org/en/stable/_images/romi-vscode-reference-example.png) titled "Select a project base" and search for "RomiReference". Select the base folder for your project, give your project an easily identifiable name, enter in your team number (e.g. if you're on team 612, you would type ```612``` in this box), and click on the checkbox titled "Enable Desktop Support." 

You should recieve a message indicating that your project was successfully created, giving you the option to open it either in a new or the current window. Choose which option works for you. 

To run your Romi Program, connect to the Romi's WiFi (See "Booting Up a Romi" for more details on connecting to a Romi) and in VS Code, type ```Ctrl-Shift-P``` again, this time typing in ["WPILib: Simulate Robot Code on Desktop"](https://docs.wpilib.org/en/stable/_images/vscode-run-simulation.png), and press ```Enter```. You might encounter [this screen](https://docs.wpilib.org/en/stable/_images/vscode-pick-extension.png), in which case you select either one or both options. If all goes well, you should see [this screen](https://docs.wpilib.org/en/stable/_images/sim-gui-with-labels.png) or something similar to it. 

Under the "System Joysticks" section, drag and drop "Keyboard 2" into the "Joysticks" section. Then, under the "DS" tab located at the top of the window, select "Keyboard 2 Settings", at which point you will most likely come across a screen [like so](https://docs.wpilib.org/en/stable/_images/xboxkeyboard.png). Change "Axis 0" and "Axis 1" to the keyboard system of your liking (e.g. WASD or arrow keys). 

To enable the robot, navigate to the "Robot Status" section and select "Teleoperated" from the list of robot modes. Your Romi should move according to what key is pressed. 

Congratulations! You have just run your very first Romi program, and there are sure to many more programs to run in the future!

## Further Learning with the Romi

Now that you have run your first Romi program, try experimenting with it. See if you can the Romi run at a slower maximum speed, or try making your Romi run with "Keyboard 0" instead of "Keyboard 2". Never stop experimenting with robot code, stay curious, and happy coding!
