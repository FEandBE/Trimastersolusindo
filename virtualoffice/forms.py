from django import forms
from .models import Paket, RuangRapat, Pertanyaan


class PaketForm(forms.ModelForm):
    class Meta:
        model = Paket
        fields = '__all__'


class RuangRapatForm(forms.ModelForm):
    class Meta:
        model = RuangRapat
        fields = '__all__'


class PertanyaanForm(forms.ModelForm):
    class Meta:
        model = Pertanyaan
        fields = '__all__'