from django.conf import settings
from .forms import ContactForm  # Import your custom form
from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.mail import send_mail
from django.shortcuts import render
from django.shortcuts import render
from django.core.mail import send_mail
from .forms import ContactForm
from .models import Project

# Create your views here.


def index(request):
    projects = Project.objects.all()
    return render(request, 'index.html', {'projects': projects})


# views.py


def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            phone = form.cleaned_data['phone']
            message = form.cleaned_data['message']

            subject = 'Contact Form Submission'
            message = f'Name: {name}\nEmail: {email}\n\nMessage:\n{message}'
            from_email = settings.DEFAULT_FROM_EMAIL
            # Set this to the desired recipient email
            recipient_list = [settings.CONTACT_EMAIL]

            send_mail(subject, message, from_email, recipient_list)

            # Redirect to a success page or display a thank you message
            # Change 'success_page' to the actual URL name
            messages.success("Thank you and I will reply shortly...")
            return redirect('index.html')

    else:
        form = ContactForm()
    messages.danger("Please try again...")
    return render(request, 'index.html', {'form': form})
