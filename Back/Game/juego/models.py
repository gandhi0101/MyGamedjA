from django.db import models

COLORES = {
    ('0', 'Blanco'),
    ('1', 'Negro'),
    ('2', 'Rojo'),
    ('3', 'Verde'),
    ('4', 'Amarillo'),
}
# Create your models here.
class Deposito(models.Model):
    codigo = models.IntegerField()
    description = models.CharField(max_length=30)

class Articulo(models.Model):
    codigo = models.IntegerField()
    description = models.CharField(max_length=30)

    cantidad = models.IntegerField() 
    color = models.CharField(max_length=1, choices = COLORES)
    deposito = models.ForeignKey(Deposito, null=True, on_delete=models.SET_NULL)
