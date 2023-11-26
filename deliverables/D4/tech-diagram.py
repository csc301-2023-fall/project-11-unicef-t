from diagrams import Diagram
from diagrams.aws.compute import EC2, ECS
from diagrams.aws.database import RDS, Aurora
from diagrams.aws.network import ELB
from diagrams.k8s.compute import ReplicaSet


with Diagram("Diagram", show=False):
    [ReplicaSet("Geojson Files") >> EC2("Data Processing \n(Extract and organize data for Mapbox)"),
        ECS("Superset Backend \n(Python and Flask)"),
        ELB("Mapbox API \n(Node.js, Unity)")] >> RDS("Mapbox Plugin") >> Aurora("Superset Frontend \n(Typescript React)")
