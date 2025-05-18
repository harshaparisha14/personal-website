# Portfolio Website Deployment Guide

This guide will help you deploy your portfolio website with a working contact form.

## Option 1: GitHub Pages + FormSubmit (Easiest)

### Step 1: Create a GitHub Repository
1. Go to https://github.com/new
2. Name the repository `portfolio` or `personal-website`
3. Make it public
4. Click "Create repository"

### Step 2: Upload Your Files
1. Click "Add file" → "Upload files"
2. Drag and drop all the files from this folder
3. Commit the changes with a message like "Initial website upload"

### Step 3: Enable GitHub Pages
1. Go to the repository Settings
2. Scroll down to "GitHub Pages"
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait a few minutes for your site to deploy
6. GitHub will show you the URL (typically username.github.io/repository-name)

### Step 4: Test Your Contact Form
1. Visit your website
2. Fill out and submit the contact form
3. You should receive a confirmation email from FormSubmit
4. Follow the instructions in that email to activate your form

## Option 2: Netlify Deployment (Best for Forms)

### Step 1: Create a Netlify Account
1. Go to https://app.netlify.com/signup
2. Sign up with GitHub (recommended)

### Step 2: Deploy from GitHub
1. Click "New site from Git"
2. Select GitHub and authorize Netlify
3. Select your portfolio repository
4. Leave the default settings and click "Deploy site"

### Step 3: Set Up Form Notifications
1. Once your site is deployed, go to "Forms" in the Netlify dashboard
2. Under "Form notifications", click "Add notification"
3. Select "Email notification"
4. Add your email address (harshaparisha@gmail.com)
5. Save the settings

### Step 4: Test Your Website
1. Visit your Netlify site URL
2. Test the contact form
3. You should receive form submissions directly to your email

## Custom Domain (Optional)
If you want to use a custom domain (like harshaparisha.com):

### For GitHub Pages:
1. Purchase a domain from a registrar like Namecheap or GoDaddy
2. In your repository Settings → Pages → Custom domain, add your domain
3. Follow GitHub's instructions to set up DNS records

### For Netlify:
1. In your site dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow Netlify's instructions to set up your domain

## Need Help?
If you encounter any issues, you can:
1. Check the documentation for [GitHub Pages](https://docs.github.com/en/pages) or [Netlify](https://docs.netlify.com/)
2. Use the "Support" options on either platform
